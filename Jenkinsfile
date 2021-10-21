pipeline {
    agent any
    environment {
        VERSION = VersionNumber([
            versionNumberString : '${BUILD_YEAR}.${BUILD_MONTH}.${BUILD_ID}',
            rojectStartDate : '2014-05-19'
        ]);
    }
    stages {
        stage('build') {
            steps {
							echo 'building the application'
                            sh 'echo "your not the only one $VERSION"'
            }
        }
        stage('test'){
            steps {
							echo 'testing the application'
            }
        }
        stage('deploy') {
            steps {
							echo 'deploying the application'
            }
        }
    }
}
