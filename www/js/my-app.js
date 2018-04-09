// Initialize your app
var myApp = new Framework7({
    modalTitle: 'ECEB',
    pushState: true,
    material: true,
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    domCahce: true,
});


//Modals/Alert/Confirm
$$('.confirm-ok-cancel').on('click', function () {
    myApp.confirm('Are you sure?',
        function () {
            myApp.alert('You clicked Ok button');
            location.href="Baby 1.html"
        },
        function () {
            myApp.alert('You clicked Cancel button');
        }
    );
});

$$('.confirm-title-ok-cancel').on('click', function () {
    myApp.confirm('Are you sure?', 'Custom Title',
        function () {
            myApp.alert('You clicked Ok button');
        },
        function () {
            myApp.alert('You clicked Cancel button');
        }
    );
});

//Model/Action sheet
//- With callbacks on click
$$('#BabyPhase2-Button').on('click', function () {
    var buttons1 = [
        {
            text: 'Normal',
            bg: 'green',
            onClick: function () {
                myApp.alert('Normal clicked');
                location.href="Normalcondition.html"
            }
        },
    ];
    var buttons2 = [
        {
            text: 'Problem',
            label: true,
            bg: 'yellow'
        },
        {
            text: 'Abnormal temperature',
            onClick: function () {
                myApp.alert('Abnormal temperature clicked');
                location.href="ProblemAbnTemp.html"
            }
        },
        {
            text: 'Under 2000g',
            onClick: function () {
                myApp.alert('Under 2000g clicked');
                location.href="ProblemUnderWt.html"
            }
        },
        {
            text: 'Poor feeding',
            onClick: function () {
                myApp.alert('Poor feeding clicked');
                location.href="ProblemPoorFeeding.html"
            }
        }
    ];
    var buttons3 = [
        {
            text: 'Danger Sign',
            bg: 'red',
            label: true
        },
        {
            text: 'Fast breathing, chest indrawing etc.',
            onClick: function () {
                myApp.alert('Danger sign clicked');
                location.href="DangerSign.html"
            }
        },
        {
            text: '<1500g or Severe Jaundice',
            onClick: function () {
                myApp.alert('<1500g or Severe Jaundice clicked');
            }
        },
    ];
    var buttons4 = [
        {
            text: 'Cancel',
            color: 'red',
            onClick: function () {
                myApp.alert('Cancel clicked');
            }
        },
    ];
    var groups = [buttons1, buttons2, buttons3, buttons4];
    myApp.actions(groups);
});

// Callbacks to run specific code for specific pages, for example for IndividualLogin page:
myApp.onPageInit('indivlogin', function (page) {
    // run createContentPage func after link was clicked
    $$('#indiv-Submit').on('click', function () {
        login();
    });
});


function login(){
    var id = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    alert(id+pass);

    // app.request.get({
    //     url: 'https://play.dhis2.org/2.27/api/me',
    //     method: 'GET',
    //     xhrFields: {
    //         withCredentials: true
    //     },
    //     cache: false,
    //     dataType: 'json',
    //     beforeSend: function (xhr) {
    //         alert('hi');
    //         xhr.setRequestHeader('Authorization', 'Basic ' + btoa(id+":"+pass));
    //     },
    //
    //     success: function (data, status, xhr) {
    //         alert("Login Sucessful");
    //         location.href = "AddBaby.html";
    //     },
    //     error: function (xhr, status) {
    //         console.log("error: " + xhr.status);
    //         alert("Login Failed");
    //     }
    // });

    $$.ajax({
        method: 'GET',
            xhrFields: {
                withCredentials: true
            },
            cache: false,
            dataType: 'json',
            beforeSend: function (xhr) {
                alert('hi');
                xhr.setRequestHeader('Authorization', 'Basic ' + btoa(id+":"+pass));
            },
            url: 'https://play.dhis2.org/2.27/api/me',

        success: function (data, status, xhr) {
            alert("Login Sucessful");
            href = "BabiesList.html";
        },
        error: function (xhr, status) {
            console.log("error: " + xhr.status);
            alert("Login Failed");
        }
    });

}

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('addbaby', function (page) {
    // run createContentPage func after link was clicked
    $$('#Createbaby-Button').on('click', function () {
        generateBaby();
    });
});

function generateBaby() {
    var child = document.getElementById("Child No.").value;
    var bed = document.getElementById("Bed No.").value;
    var gen = document.getElementById("Gender").value;
    var mothname = document.getElementById("Mother Name").value;
    var bday = document.getElementById("Birth Date time").value;
    alert(child+':'+bed+','+gen+','+mothname+','+bday);
}

// //confirm function
// myApp.confirm(text, [title, callbackOk, callbackCancel]) {
//     $$('.confirm-title-ok').on('click', function () {
//         myApp.confirm('Are you sure?', 'Custom Title', function () {
//             myApp.alert('You clicked Ok button');
//         });
//     });
//
// }

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}