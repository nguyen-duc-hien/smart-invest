<?php
// Function to handle post creation with optimizations
function create_post($data) {
    // Validate data
    if (empty($data['title']) || empty($data['content'])) {
        return array('error' => 'Title and content are required.');
    }

    // Create post array
    $post = array(
        'post_title'   => sanitize_text_field($data['title']),
        'post_content' => wp_kses_post($data['content']),
        'post_status'  => 'publish',
        'post_author'  => get_current_user_id(),
    );

    // Insert the post into the database
    $post_id = wp_insert_post($post);

    // Check for errors
    if (is_wp_error($post_id)) {
        return array('error' => $post_id->get_error_message());
    }

    // Store thumbnail URL directly in post meta (removing media upload)
    if (!empty($data['thumbnail_url'])) {
        update_post_meta($post_id, 'thumbnail_url', esc_url($data['thumbnail_url']));
    }

    // Return success response
    return array('success' => true, 'post_id' => $post_id);
}
?>