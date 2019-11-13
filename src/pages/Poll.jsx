import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { randomColor } from "@dashdashzako/random-hex-color";
import { withFirebase } from "../components/Firebase/index";

const Poll = ({ firebase }) => {
  let { pollId } = useParams(); // allows to retrieve parameters we passed onto the url
  const [votes, setVotes] = useState({
    a: 1,
    b: 1,
    c: 1,
    d: 50,
    f: 30
  });
  useEffect(() => {
    // this will run every time the pollId will change (i.e) every time the page loads
    // you should probably do something with the pollId here:
    // have a look at this https://firebase.google.com/docs/firestore/query-data/get-data
  }, [pollId]);
  return (
    <div>
      <Doughnut
        data={{
          labels: Object.keys(votes),
          datasets: [
            {
              data: Object.values(votes),
              backgroundColor: Object.keys(votes).map(item => randomColor())
            }
          ]
        }}
      />
    </div>
  );
};

export default withFirebase(Poll);
