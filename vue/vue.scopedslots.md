< !--省略部分代码 -->
  <Table ref="myTable" border : data="dataList" : columns="columns">
    <!-- 操作 -->
  <template slot="action" slot-scope="props">
      <Button : disabled="props.age>24" type="primary" size="small">通过</Button>
    <Divider type="vertical" />
    <Poptip confirm title="Delete this item?" transfer>
      <Button type="warning" size="small">删除</Button>
    </Poptip>
  </template>
</Table >

< !--省略部分代码 -->
  render: (h, params) => {
    return h(
      'div',
      this.$refs.myTable.$scopedSlots.action({ age: params.row.age })
    )
  }


  <Table ref="myTable" border :data="dataList" :columns="columns">
    <!-- 可展开 -->
    <template slot="expandRow" slot-scope="props">
        {{props.row}}
    </template>
</Table>

<!-- 省略部分代码 -->
{
    type: 'expand',
    width: 50,
    render: (h, params) => {
        return h(
            'div',
            this.$refs.myTable.$scopedSlots.expandRow({ row: params.row })
        )
    }
}