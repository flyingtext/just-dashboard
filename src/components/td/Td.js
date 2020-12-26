import Component from '../base'
// import './Rows.scss'

/**
 * Useful for grouping elements in a vertical layout. Similar to RootComponent,
 * but doesn't alter the `<title>` tag.
 * @module components/rows
 * @param args Component arguments
 * @param args.tagName HTML tag name (i.e. div, p, h1, h2, etc.)
 * @returns {function}
 *
 * @example <caption>YAML format</caption>
 * rows:
 *   ...
 *
 * @example <caption>JSON format</caption>
 * {
 *   "component": "rows",
 *   "data": [...]
 * }
 *
 * @example <caption>JavaScript format</caption>
 * import RowsComponent from 'components/rows'
 *
 * RowsComponent({'tagName': 'p'})(d3.selection())(...)
 */

const TdComponent = Component({
  'validators': [],
  'init': (args, selection) => {
    const item = selection.append('td').attr('class', 'ds--td')
    if (args.hasOwnProperty('align'))
      item.attr('data-align', args.align)

    return item
  },
  'render': (args, selection, data, item) => item.html(data)
})
/*
const TdComponent = Wrapped((args, selection) => selection
  // .append('td')
  // .attr('class', 'ds--td')
)(ContainerComponent({
  'wrapper_tag': 'td',
  'wrapper_class': 'ds--td'
}))
*/

export default TdComponent
