const defaultResolver = require('./default.resolver')
const defaultConverter = require('./default.v2r.converter')

/**
 * convert vson 2 rVson
 */
exports.v2r=(vson,converter,options)=>{
    converter = converter || defaultConverter
    return converter.convert(vson,options)
}

exports.solve = (vson,resolver,options)=>{
    resolver = resolver || defaultResolver
    //todo
}

