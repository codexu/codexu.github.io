// 获取最新版本
import axios from 'axios';
export async function getLatestRelease(owner: string, repo: string) {
  try {
    const url = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;
    const response = await axios.get(url);
    const latest = response.data;
    return latest
  } catch (error: any) {
    console.error(`Error: ${error.response?.status || error.message}`);
  }
}