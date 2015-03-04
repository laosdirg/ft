import React from 'react'

import StoreMixin from 'lib/flux/store_mixin'

import casesStore from '../stores/cases_store'
import caseStore from '../stores/case_store'
import caseActorRoleStore from '../stores/case_actor_role_store'

import App from 'lib/core/components/app.jsx!'
import Anchor from 'lib/routing/components/anchor.jsx!'
import CaseItem from './case_item.jsx!'

export const CasePage = React.createClass({

  mixins: [ StoreMixin ],

  statics: {
    stores: [ casesStore, caseStore ]
  },

  getStateFromStores() {
    return { 
      caselistitem: casesStore.getItem( this.props.caseId ),
      caseitem: caseStore.getItem(),
      caseactorroles: caseActorRoleStore.get()
    }
  },

  render() {
    return (
      <App>
        <section>
          <CaseItem caseid={ this.props.caseId } caselistitem={ this.state.caselistitem } />
        </section>

        <section>
          <h1>Relaterede aktører</h1>
          <ol>
            { this.state.caseitem.map( caseactor =>
              { return (
                  <li key={ caseactor.get('id') }>
                    <Anchor href={ '/actors/' + caseactor.get('aktørid') }>
                      ID:{ caseactor.get('aktørid') } Rolle: { this.state.caseactorroles.get(caseactor.get('rolleid')) }
                    </Anchor>
                  </li>
                )
              }
            )}
          </ol>
        </section>
        
        <section>

        </section>
      </App>
    )
  }
})

export default CasePage