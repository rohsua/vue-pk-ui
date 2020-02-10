const {
    injectGoogleFontLink,
    VuetifyPresetGenerator,
} = require('@vuetify/cli-plugin-utils')

module.exports = (api: Function) =>
    VuetifyPresetGenerator(api, 'phonekeeper', () => {
        injectGoogleFontLink(api, 'NotoSansKR:300,400,500')
    })
}