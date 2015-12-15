// This function returns the selection of the computer
            var userPoint = 0;
            var aiPoint = 0;
            
            /**
             * Randomly selects a number representing a throw. 
             * @return {[type]} [description]
             */
            function getAISelection() {
                // Step 1 - declare the moves
                    var options =["paper", "rock", "scissors", "drill", "JohnCena", "troll"];
                    
                // Step 2 - pick random number
                   var random_num = Math.floor((Math.random() * options.length)); 
                
                // Step 3 - associate random number
                    options[random_num];
                // Step 4 - return the move
                    return(options[random_num]);
            }
            
            // This function picks the winner
            function pickWinner( userValue, aiValue ) {
                //step 1: if(userValue > aiValue{
                    if(
                        (userValue =='rock' && aiValue == 'scissors') || 
                        (userValue == 'scissors' && aiValue == 'paper') ||
                        (userValue == 'paper' && aiValue == 'rock') ||
                        (userValue =='drill')
                      ){
                        userPoint++;
                        setScore();
                        return 'user';
                        }           
                    else if(
                             (aiValue =='rock' && userValue == 'scissors') || 
                             (aiValue == 'scissors' && userValue == 'paper') ||
                             (aiValue == 'paper' && userValue == 'rock')
                            ) {
                                aiPoint++;
                                setScore();
                                return 'ai';
                            }
                    else if
                            (userValue =='JohnCena')
                                {
                                userPoint++;
                                setScore();
                                return 'draw'
                                }
                            
                    else if
                            (userValue =='troll')
                                {
                                    userPoint++;
                                    setScore();
                                    return 'ai'
                                }
                        
                    else{
                        return 'draw';
                    }
            }    
            
       //     }

            
            /**
             * Sets the scoreboard with the correct points. 
             */
            function setScore() {
                $('#userPoint').text(userPoint);
                $('#aiPoint').text(aiPoint);
            }
            
            
            
            /**
             * This function captures the click and picks the winner. 
             * @param  {[type]} evt [description]
             * @return {[type]}     [description]
             */
            function evaluate( evt ){
                var userValue = evt.target.getAttribute('id');
                var aiValue = getAISelection();

                var winner = pickWinner(userValue, aiValue );

                if ( winner === 'user' ) {
                    $('#message').delay(50).text('Victory at last!, Lets go again ' +  userValue  +  ' ' + aiValue);
                } else if ( winner === 'draw' ) {
                    $('#message').delay(50).text('Huh we are equals Lets go again'  +  userValue  +  aiValue);
                } else if (winner === 'ai'){
                    $('#message').delay(50).text('Curses, the troll got us! Lets go again'  +  userValue  +  aiValue);
                }
                else {
                    $('#message').delay(50).text('How could I lose!, Lets have a rematch'  + userValue  +  aiValue);
                }
            }

            /**
             * This function runs on page load. 
             */
            $(document).ready(function(){
                $('.token').on('click', function(e) {
                evaluate(e); 
                });
            });
            