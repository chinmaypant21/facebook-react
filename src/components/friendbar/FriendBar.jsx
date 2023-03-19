import "./FriendBar.css"
import { GiftIcon } from "../../utils/icons";

const FriendBar = () => {
    return(
        <div className="friendbar-container">
            <div className="friendbar-wrapper">
                <div className="birthday-container">
                    <h4 className="section-heading">Birthdays</h4>
                    <div>
                        <img src={GiftIcon} />
                        <p>{'dsfodsjfiosd'} and {'2 others'} have their birthdays today.</p>
                    </div>

                </div>
                
                <div className="contact-container top-hr-outline">
                    <h4 className="section-heading">Contacts</h4>
                </div>

                <div className="group-container top-hr-outline">

                </div>
            </div>
        </div>
    )   
}

export default FriendBar;