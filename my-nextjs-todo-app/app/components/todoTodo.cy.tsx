import React from 'react'
import Todo from './todo'

describe('<Todo />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Todo />)
  })
})