
interface ISSLConfig {
    store_name: string;
    payment_api: string;
    validation_api: string;
    store_id: string;
    store_pass: string;
    validation_url: string;
    success_url: string;
    failed_url: string;
    cancel_url: string;
  }
  
  interface IConfig {
    NODE_ENV: string;
    port: string;
    db_url: string;
    bcrypt_salt_rounds: string;
    jwt_access_secret: string;
    jwt_access_expires_in: string;
    jwt_refresh_secret: string;
    jwt_refresh_expires_in: string;
    jwt_otp_secret: string;
    jwt_pass_reset_secret: string;
    jwt_pass_reset_expires_in: string | number;
    admin_email: string;
    admin_password: string;
    admin_profile_photo?: string;
    admin_mobile_number?: string;
    cloudinary_cloud_name: string;
    cloudinary_api_key: string;
    cloudinary_api_secret: string;
    sender_email: string;
    sender_app_password: string;
    ssl: ISSLConfig;
  }