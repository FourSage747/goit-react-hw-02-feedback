import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
const { Component } = require("react");

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        hasFeedback: false
    }

    good = () => {
        this.setState((prevState) => ({ good: prevState.good + 1, hasFeedback: true }));
    }

    neutral = () => {
        this.setState((prevState) => ({ neutral: prevState.neutral + 1, hasFeedback: true }));
    }

    bad = () => {
        this.setState((prevState) => ({ bad: prevState.bad + 1, hasFeedback: true }));
    }
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad } = this.state;
        const totalFeedback = good + neutral + bad;
        
        if (totalFeedback === 0) {
            return 0;
        }
    
        const percentage = (good / totalFeedback) * 100;
        return Math.round(percentage);
    }
    

    render () {
        const { good, neutral, bad, hasFeedback } = this.state
        const totalFeedback = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions 
                        good={this.good} 
                        neutral={this.neutral} 
                        bad={this.bad}
                    />
                </Section>
                <Section title="Statistics">
                    {hasFeedback && <Statistics 
                        good={good} 
                        neutral={neutral} 
                        bad={bad} 
                        total={totalFeedback} 
                        positivePercentage={positivePercentage}
                    />}
                </Section>
                <Notification message="There is no feedback" hasFeedback={hasFeedback} />
            </div>
        )
    }
}