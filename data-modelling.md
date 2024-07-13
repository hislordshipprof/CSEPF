
### Models
2. User
    - id: UUID4
    - full_name: str
    - bio: string
    - image: string
    - email: string
    - more_info: json # {socials: {facebook,twitter,linkedin, instagram}
    - created_at: datetime
    - updated_at: datetime

2. Application
    - id: UUID4
    - full_name: string
    - email: string
    - phone: string
    - school: string
    - program: string
    - status: string
    - created_at: datetime
    - updated_at: datetime
    - address: string

3. Cohort
    - id: UUID4
    - name: string
    - start_date: datetime
    - end_date: datetime
    - is_completed: boolean
    - created_at: datetime
    - updated_at: datetime

4. CohortUser
    - id: UUID4
    - user: fk (User)
    - school: string
    - program: string
    - cohort: fk (Cohort)
    - created_at: datetime
    - updated_at: datetime

1. **Testimonial**
    - id: UUID4
    - user: pk (CohortUser)
    - testimonial: string
    -tags: MTM (SubPolicyTopic)

4. PolicyTopic
    - id: UUID4
    - name: string

5. SubPolicyTopic
    - id: UUID4
    - name: string
    - policy_topic: fk (PolicyTopic)

3. Presentation
    - id: UUID4
    - title: string
    - summary: string
    - date: datetime
    - created_at: datetime
    - updated_at: datetime
    -presenter: string
    -tags: MTM (SubPolicyTopic)
    -is_featured: boolean
    - link: string
    - document: string
    - is_featured: boolean
    - is_published: boolean

7. Staff
    - id: UUID4
    - user: fk (User)
    - position: string
    - is_featured: boolean
    - bio: string
    - created_at: datetime
    - updated_at: datetime


6. HomePageSettings
    - id: UUID4
    - title: string
    - description: string
    - keywords: string
    - created_at: datetime
    - updated_at: datetime

