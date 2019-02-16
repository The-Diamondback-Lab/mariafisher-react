// packages
import React from 'reactn'

// atoms
import { Icon, Text } from '../../atoms'

/**
 * @file Functional React component representing a div with a loading state.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Functional component representing a div with a loading state.
 *
 * @param {object} props - properties for the component
 * @returns {HTMLDivElement} html div element with a loading state
 */
const Loading = () => {
  return (
    <div className='adm-loading animated'>
      <Icon spin weight='far' name='fa-sync-alt' />
      <Text>Loading</Text>
    </div>
  )
}

export default Loading
