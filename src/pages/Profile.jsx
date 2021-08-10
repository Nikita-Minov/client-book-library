import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {getUser} from "../redux/user-reducer";
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
            props.getUser();
    }, [props.isAuth])
    /* eslint-enable react-hooks/exhaustive-deps */
    if(props.isAuth === true) {
      console.log('Logged')
        return (
            <div>
                <h1>Profile</h1>
                <h1>{props.user.username}</h1>
                <h1>{props.user.id}</h1>
            </div>
        );
    } else {
        console.log(props.isAuth)
        console.log('No logged')
        return <Redirect to={`/`} />;
    }
}

const MapStateToProps = (state) => {
    return {
        user: state.user.user,
        isAuth: state.user.isAuth
    }
}

const ProfileContainer = connect(MapStateToProps, { getUser })(Profile)

export default ProfileContainer;
