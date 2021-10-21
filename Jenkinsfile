pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('build') {
            steps {
							echo 'building the application'
							sh 'node --version'
							sh 'npm --version'
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
