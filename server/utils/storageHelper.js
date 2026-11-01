import { SUPABASE_STORAGE_BUCKET, supabase } from "../config/supabase.js";

export const uploadToStorage = async (fileBuffer, key, mimeType) => {
    const { error } = await supabase.storage
        .from(SUPABASE_STORAGE_BUCKET)
        .upload(key, fileBuffer, {
            contentType: mimeType,
            upsert: false,
        });

    if (error) {
        throw error;
    }

    return { s3Key: key };
};

export const getSignedFileUrl = async (key) => {
    const { data, error } = await supabase.storage
        .from(SUPABASE_STORAGE_BUCKET)
        .createSignedUrl(key, 36000);

    if (error) {
        throw error;
    }

    if (!data?.signedUrl) {
        throw new Error("Supabase Storage did not return a signed URL.");
    }

    return data.signedUrl;
};

export const deleteFromStorage = async (key) => {
    if (!key) return;

    const { error } = await supabase.storage
        .from(SUPABASE_STORAGE_BUCKET)
        .remove([key]);

    if (error) {
        throw error;
    }
};

export const deleteMultipleFromStorage = async (keys) => {
    if (!keys?.length) return;

    const objectKeys = keys.filter(Boolean);
    if (!objectKeys.length) return;

    const { error } = await supabase.storage
        .from(SUPABASE_STORAGE_BUCKET)
        .remove(objectKeys);

    if (error) {
        throw error;
    }
};