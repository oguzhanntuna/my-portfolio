class ProjectItem {
  constructor(
    title,
    type,
    image,
    description,
    technologiesUsed,
    additionalFeatures,
    githubLink,
    websiteLink
  ) {
    this.title = title;
    this.type = type;
    this.image = image;
    this.description = description;
    this.technologiesUsed = technologiesUsed;
    this.additionalFeatures = additionalFeatures;
    this.githubLink = githubLink;
    this.websiteLink = websiteLink;
  }
}
export default ProjectItem;
