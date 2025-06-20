import pool from "../database";

export interface FeatureImage {
  id?: number;
  url: string;
  title: string;
  display_order: number;
  created_at?: Date;
  updated_at?: Date;
}

export const getAllFeatureImages = async (): Promise<FeatureImage[]> => {
  const result = await pool.query(
    "SELECT * FROM feature_images ORDER BY display_order ASC"
  );
  return result.rows;
};

export const addFeatureImage = async (image: FeatureImage): Promise<void> => {
  const { url, title, display_order } = image;
  await pool.query(
    "INSERT INTO feature_images (url, title, display_order) VALUES ($1, $2, $3)",
    [url, title, display_order]
  );
};

export const deleteFeatureImage = async (id: number): Promise<void> => {
  await pool.query("DELETE FROM feature_images WHERE id = $1", [id]);
};
