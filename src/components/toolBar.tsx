import {
  BoldOutlined,
  ItalicOutlined,
  StrikethroughOutlined,
  OrderedListOutlined,
  UnorderedListOutlined,
  PlusSquareOutlined,
  CarryOutOutlined,
  LinkOutlined,
  TableOutlined,
  PictureOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons"
import { Tooltip, Dropdown } from "antd"
import PropTypes from "prop-types"

import { handleTwoSideSymbol, addList, addLink, addTable, addPhoto } from "@/util/toolbarFunc"
import "@/styles/toolbar.scss"

interface PropsType {
  value: string
  setValue: (value: string) => void
  editElement: any
}

const NavBar: React.FC<PropsType> = (props) => {
  const { value, setValue, editElement } = props
  return (
    <nav>
      <Tooltip title="加粗">
        <BoldOutlined
          className="item"
          onClick={() => handleTwoSideSymbol(editElement.current, setValue, value, "**", "加粗字体")}
        />
      </Tooltip>
      <Tooltip title="斜体">
        <ItalicOutlined
          className="item"
          onClick={() => handleTwoSideSymbol(editElement.current, setValue, value, "*", "倾斜字体")}
        />
      </Tooltip>
      <Tooltip title="删除线">
        <StrikethroughOutlined
          className="item"
          onClick={() => handleTwoSideSymbol(editElement.current, setValue, value, "~~", "删除文本")}
        />
      </Tooltip>
      <Tooltip title="有序列表">
        <OrderedListOutlined
          className="item"
          onClick={() => addList(editElement.current, setValue, value, "1.", "有序列表")}
        />
      </Tooltip>
      <Tooltip title="无序列表">
        <UnorderedListOutlined
          className="item"
          onClick={() => addList(editElement.current, setValue, value, "-", "无序列表")}
        />
      </Tooltip>
      <Tooltip title="清单列表">
        <PlusSquareOutlined
          className="item"
          onClick={() => addList(editElement.current, setValue, value, "- [ ]", "清单列表")}
        />
      </Tooltip>
      <Tooltip title="任务列表">
        <CarryOutOutlined
          className="item"
          onClick={() => addList(editElement.current, setValue, value, "- [x]", "任务列表")}
        />
      </Tooltip>
      <Tooltip title="超链接">
        <LinkOutlined className="item" onClick={() => addLink(editElement.current, setValue, value)} />
      </Tooltip>
      <Tooltip title="表格">
        <TableOutlined className="item" onClick={() => addTable(editElement.current, setValue, value)} />
      </Tooltip>
      <Tooltip title="图片">
        <PictureOutlined className="item" onClick={() => addPhoto(editElement.current, setValue, value)} />
      </Tooltip>
      <Dropdown>
        <span>
          <LeftOutlined />/<RightOutlined />
        </span>
      </Dropdown>
    </nav>
  )
}

NavBar.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  editElement: PropTypes.element.isRequired,
}

export default NavBar
