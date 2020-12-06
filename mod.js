// Copyright 2020 Pascal Salesch <Pascal.B.Salesch@gmail.com>. All rights reserved. MIT license.

export default eval(`${(new URL(import.meta.url).hash).substr(1)}`);
