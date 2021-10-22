pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }
    stages {
        stage('build') {
            steps {
                echo 'Building the application'
                sh 'npm run build'
            }
        }
        stage('deliver') {
            steps {
                echo 'Deliver build files'
            }
        }
        stage('deploy') {
            steps {
                echo 'deploying the application'
            }
        }
    }
}
