export const locators = {
    register: {
        firstName:'#first-name',
        lastName:'#last-name',
        email:'#email',
        password:'#password',
        confirmPassword:'#password-confirmation',
        terms:'[type="checkbox"]',
        submitBtn:'.btn'
    },

    login: {
        email:'#email',
        password: '#password',
        submitBtn: '.btn',
    },

    galleries: {
        title: '',
        searchField: '',
        filterBtn: '',
    },
    createGallery: {
        createGalleryBtn: '.mr-auto > :nth-child(3) > .nav-link',
        headline: '.title-style',
        title: '#title',
        description: '#description',
        images: '[type="url"]',
        addImage: '[type="button"]',
        submit: '.btn.btn-custom',
        cancel: '.btn.btn-custom',

    }

}
