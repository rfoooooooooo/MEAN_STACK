angular.module('ContactManagementController', [])

// Controller: Contact to control the management page and managing of user accounts
.controller('ContactManagementCtrl', function(Contact) {
    var app = this;

    app.loading = true; // Start loading icon on page load
    app.accessDenied = true; // Hide table while loading
    app.errorMsg = false;

    Contact.getContacts().then(function(data) {
        if (data.data.success) {
            app.contactss = data.data.contactss;
            app.loading = false;
            app.accessDenied = false; 
        }else
        {
            app.errorMsg = data.data.message;
        }
    });
});


