#! /usr/bin/env node

import importLocal from 'import-local'
import log from 'npmlog'
import install from './src'

if (importLocal(__filename))
    log.info('cli', 'using local version of project')
else
    install()
