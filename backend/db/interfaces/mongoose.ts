interface ICollection {
    name: string
    type: 'collection'
    options: any
    info: {
        readonly: boolean
        uuid: any
    }
    idIndex: any
}

export {ICollection}
