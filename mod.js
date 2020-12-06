// Copyright 2020 Pascal Salesch <Pascal.B.Salesch@gmail.com>. All rights reserved. MIT license.

const url = new URL(import.meta.url)
const hash = url.hash.substr(1)
const params = url.searchParams
const valueName = hash || params.get('eval')
const async = url.searchParams.get('async') === 'true'
const value = async ? (await (new (Object.getPrototypeOf(async () => {}).constructor)(`return ${valueName}`)())) : (new Function(`return ${valueName}`))()

export default value
