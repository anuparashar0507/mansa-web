export type Job = {
  title: string;
  company?: string;
  description?: string;
  postedBy?: string;
  socialLinks: {
    LinkedIn?: string;
    Facebook?: string;
    Instagram?: string;
    Discord?: string;
  };
  link: string;
  salaryRange?: [string, string];
  experienceRequired?: [string, string?];
  location: string;
  type: "Government" | "Private" | "Non-profit Organisation" | "Volunteer";
  sector:
    | "Agriculture"
    | "IT"
    | "Marketing"
    | "Sales"
    | "HR"
    | "Accounting"
    | "Advertising"
    | "Animation"
    | "Architecture Jobs"
    | "Automobile Jobs"
    | "Aviation Jobs"
    | "BPO Jobs"
    | "Bank Jobs"
    | "Brewery Jobs"
    | "Sanitary Jobs"
    | "Chemical Jobs"
    | "Engineering Jobs"
    | "Consumer Durables Jobs"
    | "Courier Jobs"
    | "Defence Jobs"
    | "Teacher Jobs"
    | "Electrical Jobs"
    | "Export-Import Jobs"
    | "FMCG Jobs"
    | "Facility Management Jobs"
    | "Fertilizers Jobs"
    | "Food Processing Jobs"
    | "Fresher Jobs"
    | "Gems Jewellery Jobs"
    | "Glass Jobs"
    | "Air Conditioning Jobs"
    | "Airline Jobs"
    | "Networking Jobs"
    | "IT Jobs"
    | "Industrial Jobs"
    | "Insurance Jobs"
    | "KPO Jobs"
    | "Legal Jobs"
    | "Media Jobs"
    | "Entertainment Jobs"
    | "Medical Jobs"
    | "Mining Jobs"
    | "NGO Jobs"
    | "Automation Jobs"
    | "Oil and Gas Jobs";
};
