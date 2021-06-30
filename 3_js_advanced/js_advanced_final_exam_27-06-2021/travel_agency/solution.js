window.addEventListener('load', solution)

function solution() {
    let fullName_input = document.getElementById('fname')
    let email_input = document.getElementById('email')
    let phoneNumber_input = document.getElementById('phone')
    let address_input = document.getElementById('address')
    let postalCode_input = document.getElementById('code')
    let submit_button = document.getElementById('submitBTN')

    submit_button.addEventListener('click', (e) => {
        e.preventDefault()

        if (!fullName_input.value || !email_input.value) {
            return
        }

        submit_button.disabled = true
        let edit_button = document.getElementById('editBTN')
        edit_button.disabled = false
        let continue_button = document.getElementById('continueBTN')
        continue_button.disabled = false
        let ul_element = document.getElementById('infoPreview')
        let name_li_element = document.createElement('li')
        name_li_element.textContent = `Full Name: ${fullName_input.value}`
        let email_li_element = document.createElement('li')
        email_li_element.textContent = `Email: ${email_input.value}`
        let phone_li_element = document.createElement('li')
        phone_li_element.textContent = `Phone Number: ${phoneNumber_input.value}`
        let address_li_element = document.createElement('li')
        address_li_element.textContent = `Address: ${address_input.value}`
        let postal_li_element = document.createElement('li')
        postal_li_element.textContent = `Postal Code: ${postalCode_input.value}`
        
        ul_element.appendChild(name_li_element)
        ul_element.appendChild(email_li_element)
        ul_element.appendChild(phone_li_element)
        ul_element.appendChild(address_li_element)
        ul_element.appendChild(postal_li_element)

        //reset fields
        fullName_input.value = ''
        email_input.value = ''
        phoneNumber_input.value = ''
        address_input.value = ''
        postalCode_input.value = ''

        edit_button.addEventListener('click', (sexy) => {
            sexy.preventDefault()

            while (ul_element.firstChild) {
                ul_element.removeChild(ul_element.firstChild)
            }

            fullName_input.value = name_li_element.textContent
            email_input.value = email_li_element.textContent
            phoneNumber_input.value = Number(phone_li_element.textContent)
            address_input.value = address_li_element.textContent
            postalCode_input.value = Number(postal_li_element.textContent)

            submit_button.disabled = false
            edit_button.disabled = true
            continue_button.disabled = true
        })

        continue_button.addEventListener('click', (sexy) => {
            sexy.preventDefault()
            let mail_div_element = document.getElementById('block')

            while (mail_div_element.firstChild) {
                mail_div_element.removeChild(mail_div_element.firstChild)
            }

            let sexyMessage = document.createElement('h3')
            sexyMessage.textContent = 'Thank you for your reservation!'
            mail_div_element.appendChild(sexyMessage)
        })
    })
}