import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import gql from 'graphql-tag';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

const App = ({ userId, currentUser, refetch }) => (
  <div>

    <div className="title-text">
      Приемщик / рабочее время
    </div>

    <div className="title-time">
      <div className="tite-time-item">8.00</div>
      <div className="tite-time-item">9.00</div>
      <div className="tite-time-item">10.00</div>
      <div className="tite-time-item">11.00</div>
      <div className="tite-time-item">12.00</div>
      <div className="tite-time-item">13.00</div>
      <div className="tite-time-item">14.00</div>
      <div className="tite-time-item">15.00</div>
      <div className="tite-time-item">16.00</div>
      <div className="tite-time-item">17.00</div>
      <div className="tite-time-item-last">18.00</div>
    </div>

    <div className="clr"></div>


    <div>

      <div className="timeline-title">
        <div className="master-name">Приемщик 2</div>
        <div className="wr">
          <div className="item">ПЛАН</div>
          <div className="item">ФАКТ.</div>
        </div>
      </div>
      <div className="timeline" id="plan">
        <div id="0810" className="timeline-item"></div>
        <div id="0820" className="timeline-item green"></div>
        <div id="0830" className="timeline-item green"></div>
        <div id="0840" className="timeline-item"></div>
        <div id="0850" className="timeline-item"></div>
        <div id="0860" className="timeline-item"></div>
        <div id="0900" className="timeline-item"></div>
        <div id="0910" className="timeline-item"></div>
        <div id="0920" className="timeline-item"></div>
        <div id="0930" className="timeline-item"></div>
        <div id="0940" className="timeline-item"></div>
        <div id="0950" className="timeline-item"></div>
        <div id="0960" className="timeline-item"></div>
        <div id="1010" className="timeline-item"></div>
        <div id="1020" className="timeline-item"></div>
        <div id="1030" className="timeline-item"></div>
        <div id="1040" className="timeline-item"></div>
        <div id="1050" className="timeline-item "></div>
        <div id="1060" className="timeline-item "></div>
        <div id="1110" className="timeline-item"></div>
        <div id="1120" className="timeline-item"></div>
        <div id="1130" className="timeline-item"></div>
        <div id="1140" className="timeline-item"></div>
        <div id="1150" className="timeline-item"></div>
        <div id="1160" className="timeline-item"></div>
        <div id="1210" className="timeline-item"></div>
        <div id="1220" className="timeline-item"></div>
        <div id="1230" className="timeline-item"></div>
        <div id="1240" className="timeline-item"></div>
        <div id="1250" className="timeline-item"></div>
        <div id="1260" className="timeline-item"></div>
        <div id="1310" className="timeline-item"></div>
        <div id="1320" className="timeline-item"></div>
        <div id="1330" className="timeline-item"></div>
        <div id="1340" className="timeline-item"></div>
        <div id="1350" className="timeline-item"></div>
        <div id="1360" className="timeline-item"></div>
        <div id="1410" className="timeline-item"></div>
        <div id="1420" className="timeline-item"></div>
        <div id="1430" className="timeline-item"></div>
        <div id="1440" className="timeline-item"></div>
        <div id="1450" className="timeline-item"></div>
        <div id="1460" className="timeline-item"></div>
        <div id="1510" className="timeline-item"></div>
        <div id="1520" className="timeline-item"></div>
        <div id="1530" className="timeline-item"></div>
        <div id="1540" className="timeline-item"></div>
        <div id="1550" className="timeline-item"></div>
        <div id="1560" className="timeline-item"></div>
        <div id="1610" className="timeline-item"></div>
        <div id="1620" className="timeline-item"></div>
        <div id="1630" className="timeline-item"></div>
        <div id="1640" className="timeline-item"></div>
        <div id="1650" className="timeline-item"></div>
        <div id="1660" className="timeline-item"></div>
        <div id="1700" className="timeline-item"></div>
        <div id="1710" className="timeline-item"></div>
        <div id="1720" className="timeline-item"></div>
        <div id="1730" className="timeline-item"></div>
        <div id="1740" className="timeline-item"></div>
        <div id="1750" className="timeline-item"></div>

      </div>

      <div className="timeline">
        <div id="81" className="timeline-item"></div>
        <div id="82" className="timeline-item"></div>
        <div id="83" className="timeline-item"></div>
        <div id="84" className="timeline-item"></div>
        <div id="85" className="timeline-item"></div>
        <div id="86" className="timeline-item"></div>
        <div id="9" className="timeline-item"></div>
        <div id="91" className="timeline-item"></div>
        <div id="92" className="timeline-item"></div>
        <div id="93" className="timeline-item"></div>
        <div id="94" className="timeline-item"></div>
        <div id="95" className="timeline-item"></div>
        <div id="96" className="timeline-item"></div>
        <div id="101" className="timeline-item"></div>
        <div id="102" className="timeline-item"></div>
        <div id="103" className="timeline-item"></div>
        <div id="104" className="timeline-item"></div>
        <div id="105" className="timeline-item "></div>
        <div id="106" className="timeline-item "></div>
        <div id="111" className="timeline-item"></div>
        <div id="112" className="timeline-item"></div>
        <div id="113" className="timeline-item"></div>
        <div id="114" className="timeline-item"></div>
        <div id="115" className="timeline-item"></div>
        <div id="116" className="timeline-item"></div>
        <div id="121" className="timeline-item"></div>
        <div id="122" className="timeline-item"></div>
        <div id="123" className="timeline-item"></div>
        <div id="124" className="timeline-item"></div>
        <div id="125" className="timeline-item"></div>
        <div id="126" className="timeline-item"></div>
        <div id="131" className="timeline-item"></div>
        <div id="132" className="timeline-item"></div>
        <div id="133" className="timeline-item"></div>
        <div id="134" className="timeline-item"></div>
        <div id="135" className="timeline-item"></div>
        <div id="136" className="timeline-item"></div>
        <div id="141" className="timeline-item"></div>
        <div id="142" className="timeline-item"></div>
        <div id="143" className="timeline-item"></div>
        <div id="144" className="timeline-item"></div>
        <div id="145" className="timeline-item"></div>
        <div id="146" className="timeline-item"></div>
        <div id="151" className="timeline-item"></div>
        <div id="152" className="timeline-item"></div>
        <div id="153" className="timeline-item"></div>
        <div id="154" className="timeline-item"></div>
        <div id="155" className="timeline-item"></div>
        <div id="156" className="timeline-item"></div>
        <div id="161" className="timeline-item"></div>
        <div id="162" className="timeline-item"></div>
        <div id="163" className="timeline-item"></div>
        <div id="164" className="timeline-item"></div>
        <div id="165" className="timeline-item"></div>
        <div id="166" className="timeline-item"></div>
        <div id="17" className="timeline-item"></div>
        <div id="171" className="timeline-item"></div>
        <div id="172" className="timeline-item"></div>
        <div id="173" className="timeline-item"></div>
        <div id="174" className="timeline-item"></div>
        <div id="175" className="timeline-item"></div>

      </div>

    </div>

    <div className="clr"></div>



    {userId ? (<LoginButtons state="signUp" />) : (<LoginButtons visible />) }
    {userId ? (
      <div>
        <pre>{JSON.stringify(currentUser, null, 2)}</pre>
        <button onClick={() => refetch()}>Refetch!</button>
      </div>
    ) : 'Please log in!'}
  </div>
);

App.propTypes = {
  userId: React.PropTypes.string.isRequired,
  currentUser: React.PropTypes.object,
  refetch: React.PropTypes.func,
};

const GET_USER_DATA = gql`
  query ($id: String!) {
    user(id: $id) {
      emails {
        address
        verified
      }
      username
      randomString
      _id
    }
  }
`;

const withData = graphql(GET_USER_DATA, {
  props: ({ data: { error, loading, user, refetch } }) => {
    if (loading) return { userLoading: true };
    if (error) return { hasErrors: true };
    return {
      currentUser: user,
      refetch,
    };
  },
  options: (ownProps) => (
    { variables: { id: ownProps.userId } }
  ),
});

const AppWithData = withData(App);

// This container brings in Tracker-enabled Meteor data
const AppWithUserId = createContainer(() => {
  return {
    userId: Meteor.userId() || '',
  };
}, AppWithData);

export default AppWithUserId;
