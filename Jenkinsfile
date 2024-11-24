@Library("shared") _
pipeline {
    agent {label "sammy"}
    
    stages {
        stage("Hello"){
            steps{
                script{
                    hello();
                }
            }
        }
        stage("Code"){
           steps{
               script{
                   clone("https://github.com/Ammyy9908/notes-app.git","main");
               }
           }
        }
        
        stage("Build"){
            steps{
               script{
                   build("notes-app","latest","ammyy9908")
               }
            }
        }
        stage("Testing"){
             steps{
                 echo "Testing Code"
             }
        }
        
        stage("Push to Dockerhub"){
            steps{
               script{
                   push("notes-app","latest","ammyy9908")
               }
               
            }
        }
        
        stage("Deploy"){
             steps{
            //    script{
            //     //    deploy()
            //    }
            sh "docker compose down && docker compose up -d"
             }
        }
    }
}
