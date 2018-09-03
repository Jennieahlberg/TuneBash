import React from 'react';
import './CustomGame.css';

const customGame = (props) => {
    return <div>
        <div>
            <div>
                <h1 className="headline">
                    Skapa ett quiz med dina egna frågor
                </h1>
            </div>

            <div className="form">
            <div className="select">
                <form>
                    <p>
                        <select name="numberOfQuestions">
                            <option value="numberOfQusetions">Antal frågor</option>
                            <option value="5">5 frågor</option>
                            <option value="10">10 frågor</option>
                            <option value="15">15 frågor</option>
                            <option value="20">20 frågor</option>
                        </select>
                    </p>

                    <p><select name="lengthOfSong">
                        <option value="låtlängd">Låtlängd</option>
                        <option value="10">10 sek</option>
                        <option value="30">30 sek</option>
                        <option value="1">1 min</option>
                        <option value="fullLängd">Hela låten</option>
                    </select>
                    </p>
                    

                    <p><input type="text" placeholder="Låtlänk från Spotify" /></p>
                    <p><input type="text" placeholder="Fråga" /></p>
                    <p><input type="text" placeholder="Rätt svar" /></p>
                    <p><input type="text" placeholder="Fel svar 1" /></p>
                    <p><input type="text" placeholder="Fel svar 2" /></p>
                    <p><input type="text" placeholder="Fel svar 3" /></p>

                    <div>
                        <button id="createPinCode" onClick={props.onClickGenerate}>Skapa pinkod</button>
                    </div>
                </form>
                </div>
            </div>

        </div>
    </div>

}

export default customGame; 