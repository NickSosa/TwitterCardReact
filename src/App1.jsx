import './App1.css'
import TwitterFollowCard from './TwitterFollowCard'
function App1() {
    const formatUsername = (username) => `@${username}`
    return (
        <div className='App1'> 
            <TwitterFollowCard username="mark" name="Nombre D. Persona" formatUsername={formatUsername}/>
            <TwitterFollowCard username="nick" name="Nick O'Lass" formatUsername={formatUsername}/>
            <TwitterFollowCard username="angela" name="Ange Lyka" formatUsername={formatUsername}/>
            <TwitterFollowCard name="Ankh Noun" formatUsername={formatUsername}></TwitterFollowCard>
        </div>
    )
}
export default App1