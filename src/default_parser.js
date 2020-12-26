import parse from './parser/parser.js'
import RootComponent from './components/root/Root.js'
import TextComponent from './components/text/Text.js'
import ChartComponent from './components/chart/Chart.js'
import ColumnsComponent from './components/columns/Columns.js'
import RowsComponent from './components/rows/Rows.js'
import BoardComponent from './components/board/Board.js'
import DropdownComponent from './components/dropdown/Dropdown.js'
import TableComponent from './components/table/Table.js'
import TbodyComponent from './components/tbody/Tbody.js'
import TrComponent from './components/tr/Tr.js'
import TdComponent from './components/td/Td.js'

const test_parser = parse((component) => ({
  'root': RootComponent,
  'columns': ColumnsComponent,
  'rows': RowsComponent,
  'board': BoardComponent,
  'text': TextComponent,
  'chart': ChartComponent,
  'dropdown': DropdownComponent,
  'table': TableComponent,
  'tbody': TbodyComponent,
  'tr': TrComponent,
  'td': TdComponent
}[component]))

export default test_parser
