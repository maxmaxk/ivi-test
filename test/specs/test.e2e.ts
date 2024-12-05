import { expect, browser, $ } from '@wdio/globals'

describe('Test ivi application', () => {
    it('load application', async () => {
        await browser.url(`http://localhost:3000`)
        const elem= $('.css-goommx-singleValue')
        await browser.waitUntil(async () => {
            const st = await elem.getText()
            console.log('Статус', st)
            return (await elem.getText()) !== 'Загрузка...'
        }, {
            timeout: 5000,
            timeoutMsg: 'Fail load, timeout 5s'
        })
        await browser.saveScreenshot('./scr.png')

        /* await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()

        await expect($('#flash')).toBeExisting()
        await expect($('#flash')).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
        await expect($('#flash')).toMatchElementSnapshot('flashAlert') */
    })
})

