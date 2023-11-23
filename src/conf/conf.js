const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWITE_URL),
    appwriteProjectId: String(import.meta.env.PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.BUCKET_ID),

}


export default conf;