export interface DataObj {
  posts: {
    id?: number;
    url: string;
    title: string;
    company_name: string;
    company_logo: string;
    category: string;
    tags: string[];
    job_type: string;
    publication_date: string;
    candidate_required_location: string;
    salary?: string;
    description: string;
    company_logo_url?: string;
  }[];
}
