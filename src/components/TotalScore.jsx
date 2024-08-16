
import PropTypes from 'prop-types';

const TotalScore = ({score}) => {
  return (
    <div>
      <div className="TotalScore">
        <div className="flex-row text-center">
          <h1 className="font-medium text-7xl">{score}</h1>
          <p className="text-lg font-medium">Total Score</p>
        </div>
        </div>
    </div>
  )
}
TotalScore.propTypes = {
    score: PropTypes.number.isRequired
  };

export default TotalScore
