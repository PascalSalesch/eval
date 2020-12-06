#!/usr/bin/env -S deno run

import DenoImport from './mod.js#Deno'
import DenoImport2 from './mod.js?eval=Deno'
import two from './mod.js#1+1'
import twoAsync from './mod.js?async=true#1+1'
import isNull from './mod.js'

if (Deno !== DenoImport) throw new Error('Failed to import deno from hash')
if (Deno !== DenoImport2) throw new Error('Failed to import deno from querystring')
if (two !== 2) throw new Error('1+1 is not evaluated to 2')
if (twoAsync !== 2) throw new Error('async 1+1 is not evaluated to 2')
if (isNull !== null) throw new Error('isNull is not null')
