(function() {
    "use strict";

    var services = angular.module('releaseApp.services', [
        'firebase'
    ]);

    services.service('Releases', function($firebaseArray, FirebaseUrl) {
        var releasesRef = new Firebase(FirebaseUrl + '/releases');
        return $firebaseArray(releasesRef);
    });

    services.factory('Release', ['$firebaseObject', 'FirebaseUrl', '$q',
      function($firebaseObject, FirebaseUrl, $q) {
          return function(releaseId) {
              // create a reference to the database node where we will store our data
              var releasesRef = new Firebase(FirebaseUrl + '/releases');
              var releaseRef = releasesRef.child(releaseId);

              var deferred = $q.defer();
              releaseRef.once('value', function(snapshot) {
                  if (snapshot.val() !== null) {
                      deferred.resolve($firebaseObject(releaseRef));
                  } else {
                      deferred.resolve(null);
                  }
              });
              return deferred.promise;
          }
      }
    ]);
})();