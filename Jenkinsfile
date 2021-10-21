pipeline {
    agent any
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
