
            angular.module('eventApp', ['ngRoute'])
            .constant('FBMSG', 'https://planyourdaytrip.firebaseio.com/')


            angular.module('eventApp').controller('loginCtrl', ['FBMSG', function(FBMSG){
                console.log('in controller');



                var self = this;
                var ref = new Firebase(FBMSG);
                self.signUp = function() {
                console.log('in signup function', self.email, self.password);

                ref.createUser({
                    email: self.email ,
                    password: self.password
                }, function(error, userData) {
                    if (error) {
                        console.log("Error creating user: ", error);
                    } else {
                        console.log("Successfully created user account with uid: ", userData.uid);
                        console.log(userData);
                        var user = {}
                        user[userData.uid] = {
                            name: 'their name',
                            age: 'age'
                        }
                        ref.set({users: user})
                    }
                });
                }
            }])