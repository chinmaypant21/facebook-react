import "./FriendBar.css"
import { GiftImg, SearchIcon } from "../../utils/icons";
import { Users } from "../../utils/dummyData";

const FriendBar = () => {
    return(
        <div className="friendbar-container sidebar-fixed">
            <div className="friendbar-wrapper">
                <div className="birthday-container">
                    <h4 className="section-heading">Birthdays</h4>
                    <div>
                        <img src={GiftImg} alt="Surprise"/>
                        <p><b>{'Alex Durden'}</b> and <b>{'2 others'}</b> have their birthdays today.</p>
                    </div>

                </div>
                
                <div className="contact-container top-hr-outline">
                    <div className="section-heading">
                        <h4 >Contacts</h4>
                        <div className="icon-btn">
                            <SearchIcon />
                        </div>
                    </div>
                    <div className="friendlist-container">
                        {
                            Users.map((item) => (
                                <div className="profile-element" key={item.id}>
                                    <div className="profile-image-container">
                                        <img src={require('../../' + item.profilePicture)} alt={item.username}/>
                                        <div className="profile-status-marker"></div>
                                    </div>
                                    <div>{item.username}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="group-container top-hr-outline">
                    <h4 className="section-heading">Group conversations</h4>
                    <div className="group-element">
                        <div>FRIENDS</div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default FriendBar;