pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                bat 'cd /d C:\Users\eddy0\OneDrive\Documentos\actividad-1-devops && npm install'
            }
        }
        stage('Test') {
            steps {
                bat 'cd /d C:\Users\eddy0\OneDrive\Documentos\actividad-1-devops && npm run build'
            }
        }
        stage('Docker Build') {
            steps {
                bat 'cd /d C:\Users\eddy0\OneDrive\Documentos\actividad-1-devops && docker build -t eddyvalencia09/actividad-1-devops:latest .'
            }
        }
        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    bat 'echo %PASS% | docker login -u %USER% --password-stdin'
                    bat 'docker push eddyvalencia09/actividad-1-devops:latest'
                }
            }
        }
        stage('Deploy') {
            steps {
                bat 'docker stop actividad-devops 2>nul || exit 0'
                bat 'docker rm actividad-devops 2>nul || exit 0'
                bat 'docker run -d -p 8081:80 --name actividad-devops eddyvalencia09/actividad-1-devops:latest'
            }
        }
    }
}
