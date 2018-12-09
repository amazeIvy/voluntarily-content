import React, { Component } from "react";
import Resource from "./Resource";

const resourceList = [
  {
    id: "5c951c0a-3e91-436a-81ae-59ede453672a",
    createdDateTimeUTC: "2018-12-08T09:00:00.000Z",
    lastModifiedDateTimeUTC: "2018-12-08T09:00:05.000Z",
    title: "Growing in the garden",
    subtitle: "Growing digitally in the garden",
    imgUrl: "https://image.flaticon.com/icons/svg/206/206857.svg",
    description: "Project to grow something in the garden",
    duration: "15 Minutes",
    location: "Newmarket, Auckland",
    status: "draft",
    contentUrls: ["https://youtube.com/123", "https://coolwebsite"],
    categoryTags: {
      resourceType: "projectOriented",
      topics: ["garden", "robots"]
    },
    qualityRatingPoints: 150,
    topicRatingPoints: 45
  },
  {
    id: "5c951c0a-3e91-436a-81ae-59ede453672b",
    createdDateTimeUTC: "2018-12-08T09:00:00.000Z",
    lastModifiedDateTimeUTC: "2018-12-08T09:00:05.000Z",
    title: "Learn to code",
    subtitle: "Growing digitally in the garden",
    imgUrl: "https://image.flaticon.com/icons/svg/206/206869.svg",
    description: "Project to grow something in the garden",
    duration: "15 Minutes",
    location: "Newmarket, Auckland",
    status: "draft",
    contentUrls: ["https://youtube.com/123", "https://coolwebsite"],
    categoryTags: {
      resourceType: "projectOriented",
      topics: ["garden", "robots"]
    },
    qualityRatingPoints: 150,
    topicRatingPoints: 45
  },
  {
    id: "5c951c0a-3e91-436a-81ae-59ede453672c",
    createdDateTimeUTC: "2018-12-08T09:00:00.000Z",
    lastModifiedDateTimeUTC: "2018-12-08T09:00:05.000Z",
    title: "Robots Camp",
    subtitle: "Growing digitally in the garden",
    imgUrl: "https://image.flaticon.com/icons/svg/206/206870.svg",
    description: "Project to grow something in the garden",
    duration: "15 Minutes",
    location: "Newmarket, Auckland",
    status: "draft",
    contentUrls: ["https://youtube.com/123", "https://coolwebsite"],
    categoryTags: {
      resourceType: "projectOriented",
      topics: ["garden", "robots"]
    },
    qualityRatingPoints: 150,
    topicRatingPoints: 45
  }
];

class ResourceList extends Component {
  state = {
    list: []
  };
  componentDidMount() {
    this.setState({
      list: resourceList
    });
  }
  render() {
    const { list } = this.state;

    return (
      <div className="container resource-list-container">
        {list.map(resource => {
          return <Resource data={resource} />;
        })}
      </div>
    );
  }
}

export default ResourceList;
