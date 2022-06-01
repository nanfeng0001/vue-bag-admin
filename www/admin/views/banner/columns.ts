export default [
    {
        title: 'banner图',
        dataIndex: 'img',
        key: 'img',
        ellipsis: true,
        align: 'center',
        slots: {customRender: 'img'},
        formData: {
            name: 'img',
            label: 'banner图',
            element: 'bag-upload-image',
            placeholder: '上传banner图片',
            maxlength: 300,
            rules: [
                {
                    required: true, message: '图片为必填项', trigger: 'blur'
                }
            ]
        }
    },
    {
        title: '是否显示',
        dataIndex: 'shows',
        key: 'shows',
        ellipsis: true,
        align: 'center',
        width: 100,
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
        formData: {
            name: 'shows',
            label: '是否显示',
            element: 'a-switch',
            placeholder: '是否显示',
            checkedText: '是',
            uncheckedText: '否',
            defaultValue:true
        }
    },
    {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
        align: 'center',
        ellipsis: true,
        formData: {
            name: 'type',
            label: '关键词',
            element: 'a-select',
            placeholder: '输入关键词',
            options:[],
            defaultValue: Array()
        },
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        align: 'center',
        ellipsis: true,
        width: 200,
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        width: 200,
        slots: {customRender: 'action'},
    },
]
