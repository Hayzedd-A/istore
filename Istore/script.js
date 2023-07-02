// disable and enable the country input base on same nationality toogle
$('#sameCountry').click(function () {
    $('#country').val($('#nationality').val())
    $('#country').attr('disabled', function (_, attr) {
        return !attr
    })
    $('#country').css({
        borderColor: '#ced4da'
    })
})

// toggle the password visibility
$('#passwordButton').click(function () {
    var type = $('#password').attr('type') === "password" ? "text" : "password";
    $('#password').attr('type', type)
    this.classList.toggle('bi-eye')
})
// disable and enable the submit button base on terms check
$('#termsCheck').click(function () {
        $('#submit').attr('disabled', function (_, attr) {
            return !attr
        })
})



// check if any element is empty

// create a global variable
var error

// when the submit is clicked
$('#login').click(function () {}

)
// return the border colour to initial when each elements is clicked
// select each elements by class
$('.input').click(function () {
        $(this).css({
            borderColor: '#ced4da'
        })
})

$('.gender').click(function () {
    $('.gender').css({
        borderColor: '#ced4da'
    })
})

var gender
var nationalities = ['none', 'Afghanistan', 'Aland Islands', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica',
    'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus',
    'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory',
    'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic',
    'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Congo, The Democratic Republic of The',
    'Cook Islands', 'Costa Rica', "Cote D'ivoire", 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
    'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland',
    'France', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece',
    'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-bissau', 'Guyana', 'Haiti', 'Heard Island and Mcdonald Islands',
    'Holy See (Vatican City State)', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran, Islamic Republic of', 'Iraq', 'Ireland',
    'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', "Korea, Democratic People's Republic of",
    'Korea, Republic of', 'Kuwait', 'Kyrgyzstan', "Lao People's Democratic Republic", 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya',
    'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macao', 'Macedonia, The Former Yugoslav Republic of', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali',
    'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia, Federated States of', 'Moldova, Republic of',
    'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles',
    'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan',
    'Palau', 'Palestinian Territory, Occupied', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico',
    'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Pierre and Miquelon',
    'Saint Vincent and The Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone',
    'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia and The South Sandwich Islands', 'Spain', 'Sri Lanka',
    'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan', 'Tajikistan', 'Tanzania, United Republic of',
    'Thailand', 'Timor-leste', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu',
    'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan', 'Vanuatu',
    'Venezuela', 'Viet Nam', 'Virgin Islands, British', 'Virgin Islands, U.S.', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe']


$('#submit').click(function () {
    error = []
    gender = ''
    let invalid = ""
    // create array of all IDs
    var male = $('#male:checked').val()+''
    var female = $('#female:checked').val()+''
    var formElements = ['lastName', 'firstName', 'middleName', 'date', 'telephone',
        'email', 'password', 'address', 'city', 'state', 'zip']
    // alert($('nationality').find('option:selected').val())

    if (male == 'undefined' && female == 'undefined') {
        $('.gender').css({
            borderColor: 'red'
        })
    }
    else if (male === 'on') {
        gender = 'male'
        $('.gender').css({
            borderColor: '#ced4da'
        })
    }
    else if (female === 'on') {
        gender = 'female'
        $('.gender').css({
            borderColor: '#ced4da'
        })
    }

    // check for empty elements
    function checkError(id) {




        if (id.val() === '' ){
            // add the empty elements into an 'error' array
            error.push(id.attr('id'))
            //at the same time, change their border colour
            id.css({
                borderColor: 'red'
            })
            // popover initializer function
            $(function () {
                $('#submit').popover();
            })
        }
        // if not later empty, return the border colour to the initial
        // else {
        //     id.css({
        //         borderColor: '#ced4da'
        //     })
        // }
    }
    // run the checkerror function on all IDs
    $.each(formElements, function (key, value) {
        checkError($('#'+ value))
    })

    if(error.length < 1) {
        $('#submit').attr({
            'title':'OK',
            'data-bs-content': ''
        })

        alert('else code')

    }
    console.log(error.length)



    let firstname = $.trim($('#firstName').val())
    let middlename = $.trim($('#middleName').val())
    let lastname = $.trim($('#lastName').val())
    var nationality = $('#nationality').find(':selected').val()
    var country = $('#country').find(':selected').val()
    var email = $('#email').val()
    var city = $('#city').val()
    var state = $('#state').val()
    var zip = $('#zip').val()
    var telephone = $('#telephone').val()


    function isName(string) {
        var namereg = /^([a-zA-Z]*$)/
        return(namereg.test(string))
    }

    function isemail(string) {
        var emailreg = /^([a-zA-Z0-9_.+-]+@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$)/;
        return(emailreg.test(string))
    }

    if (!(/^([0-9]{5,7})/).test(zip)) {
        invalid += "<p>The zip code is invalid</p>"
    }

    if(!isName(lastname)) {
        invalid += "<p>Last Name is not a valid name</p>"
    }

    if (!isName(middlename)) {
        invalid += "<p>Middle Name is not a valid name</p>"
    }

    if (!isName(firstname)) {
        invalid += "<p>First Name is not a valid name</p>"
    }

    if (!isemail(email)) {
        invalid += "<p>Email is not a valid one</p>"
    }

    if (!isName(city)) {
        invalid += "<p>City name is not valid</p>"
    }

    if (!isName(state)) {
        invalid += "<p>State name is not valid</p>"
    }

    if (nationality === 'none') {
        $('#nationality').css({
            borderColor: 'red'
        })
    }
    else if (nationality in nationalities) {
        console.log(nationality)
    }

    if (country === 'none') {
        $('#country').css({
            borderColor: 'red'
        })
    }

    if(invalid) {
        $('#invalid').html('<div id="invalide" class="alert border-outline-danger alert-warning">' + invalid + '</div>')
    }
    else {
        $('#invalid').html('')
    }

return false
})
