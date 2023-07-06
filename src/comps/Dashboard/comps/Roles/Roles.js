// Roles.js
import "./Roles.css";

const Roles = ()=>{
    const Header = ()=>{
        const Title = ()=>{
            return(
                <div className="font-20">
                    Roles and Permission
                </div>
            )
        }
        const Drops = ()=>{
            return(
                <div className="font-20">
                    Drops
                </div>
            )
        }
        return(
            <div className="flex-row space-between full-width">
                <Title/>
                <Drops/>
            </div>
        )
    }
    return (
        <div className="relative flex-col full-width">
            <Header/>
        </div>
    )
}
export default Roles;

// end
