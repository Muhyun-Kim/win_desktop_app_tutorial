<script lang="ts">
  import { goto } from '$app/navigation';
  import { FilePen } from 'lucide-svelte';

  function handleStart() {
    goto('/create-memo/new')
  }
</script>

<div id="container">
  <div id="memo-list"></div>
  <div id="bottom-bar">
    <span id="memo-count">0</span>
    <button id="create-memo-button" onclick={handleStart}>
      <FilePen />
    </button>
  </div>

</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    height: 100vh;
  }

  #container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  #bottom-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #f0f0f0;
    border-top: 1px solid #ccc;
  }
  #memo-count {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 5px 50px 5px 10px;
  }
  #create-memo-button {
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>